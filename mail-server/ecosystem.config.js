module.exports = {
  apps: [{
    name: "selushen-mail",
    script: "index.js",
    cwd: "/opt/selushen-mail",
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: "production",
      SMTP_USER: "379992546@qq.com",
      SMTP_PASS: "hmnvyvpitqhjbghe",
      RECEIVE_EMAIL: "marcmei@solutionnmt.com,yortongi@solutionnmt.com"
    }
  }]
};
