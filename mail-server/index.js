const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001;

// SMTP 配置（QQ邮箱）
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const RECEIVE_EMAIL = process.env.RECEIVE_EMAIL || SMTP_USER;

// 只允许本站域名跨域请求
const allowedOrigins = [
  'https://sts-solutiondoors.com',
  'https://www.sts-solutiondoors.com',
  'http://8.215.84.0:8088',
  'http://localhost:3000',
];

app.use(cors({
  origin: function (origin, callback) {
    // 允许无 origin（服务端直接请求）或白名单内的来源
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['POST'],
}));

app.use(express.json({ limit: '1mb' }));

// 创建 QQ SMTP 传输器
const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

// 健康检查接口
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 询盘邮件发送接口
app.post('/api/contact', async (req, res) => {
  const {
    fullName,
    companyName,
    email,
    phone,
    country,
    productInterest,
    projectDescription,
    estimatedQuantity,
  } = req.body;

  // 基础校验
  if (!fullName || !companyName || !email || !country || !projectDescription) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // 简单邮箱格式校验
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  // 防刷：限制字段长度
  if (
    fullName.length > 100 ||
    companyName.length > 200 ||
    email.length > 200 ||
    projectDescription.length > 5000
  ) {
    return res.status(400).json({ success: false, message: 'Input too long' });
  }

  try {
    // 邮件内容（纯文本 + HTML）
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; }
    .header { background: #1B3A5C; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .header h2 { margin: 0; font-size: 20px; }
    .header p { margin: 5px 0 0; color: #D4A84B; font-size: 14px; }
    .body { background: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; }
    .value { font-size: 15px; color: #222; margin-top: 3px; font-weight: 500; }
    .message-box { background: white; border: 1px solid #ddd; border-radius: 6px; padding: 15px; margin-top: 5px; }
    .footer { font-size: 12px; color: #aaa; margin-top: 20px; text-align: center; }
    .tag { display: inline-block; background: #1B3A5C; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="header">
    <h2>New Inquiry - STS-SOLUTION</h2>
    <p>sts-solutiondoors.com</p>
  </div>
  <div class="body">
    <div class="field">
      <div class="label">Customer Name</div>
      <div class="value">${escapeHtml(fullName)}</div>
    </div>
    <div class="field">
      <div class="label">Company</div>
      <div class="value">${escapeHtml(companyName)}</div>
    </div>
    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
    </div>
    <div class="field">
      <div class="label">Phone / WhatsApp</div>
      <div class="value">${phone ? escapeHtml(phone) : '<em style="color:#aaa">Not provided</em>'}</div>
    </div>
    <div class="field">
      <div class="label">Country</div>
      <div class="value">${escapeHtml(country)}</div>
    </div>
    <div class="field">
      <div class="label">Product Interest</div>
      <div class="value">${productInterest ? '<span class="tag">' + escapeHtml(productInterest) + '</span>' : '<em style="color:#aaa">Not specified</em>'}</div>
    </div>
    <div class="field">
      <div class="label">Estimated Quantity</div>
      <div class="value">${estimatedQuantity ? escapeHtml(estimatedQuantity) : '<em style="color:#aaa">Not specified</em>'}</div>
    </div>
    <div class="field">
      <div class="label">Project Description</div>
      <div class="message-box">${escapeHtml(projectDescription).replace(/\n/g, '<br>')}</div>
    </div>
    <div class="footer">
      This inquiry was submitted via sts-solutiondoors.com contact form.<br>
      Please reply directly to the customer's email: ${escapeHtml(email)}
    </div>
  </div>
</body>
</html>
    `.trim();

    const textContent = [
      '=== New Inquiry from STS-SOLUTION Website ===',
      '',
      `Name: ${fullName}`,
      `Company: ${companyName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Country: ${country}`,
      `Product Interest: ${productInterest || 'Not specified'}`,
      `Estimated Quantity: ${estimatedQuantity || 'Not specified'}`,
      '',
      'Project Description:',
      projectDescription,
      '',
      '---',
      'Reply to customer: ' + email,
    ].join('\n');

    await transporter.sendMail({
      from: `"STS-SOLUTION Website" <${SMTP_USER}>`,
      to: RECEIVE_EMAIL,
      replyTo: email,
      subject: `[STS-SOLUTION Inquiry] ${companyName} - ${country}`,
      text: textContent,
      html: htmlContent,
    });

    res.json({ success: true, message: 'Inquiry sent successfully' });
  } catch (err) {
    console.error('Mail send error:', err);
    res.status(500).json({ success: false, message: 'Failed to send email. Please try WhatsApp.' });
  }
});

// 简单 HTML 转义，防止 XSS
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Mail API server running on port ${PORT}`);
  console.log(`SMTP user: ${SMTP_USER}`);
});
