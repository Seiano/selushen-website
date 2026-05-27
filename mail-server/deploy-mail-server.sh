#!/bin/bash
# deploy-mail-server.sh
# 在服务器上执行此脚本来部署邮件 API 服务
# 使用方法: bash deploy-mail-server.sh

set -e

DEPLOY_DIR=/opt/selushen-mail
SMTP_USER="你的QQ邮箱@qq.com"
SMTP_PASS="hmnvyvpitqhjbghe"
RECEIVE_EMAIL="你的QQ邮箱@qq.com"

echo "=== 1. 检查 Node.js ==="
node -v || (echo "Node.js 未安装，正在安装..." && curl -fsSL https://rpm.nodesource.com/setup_18.x | bash - && yum install -y nodejs)

echo "=== 2. 检查/安装 PM2 ==="
pm2 -v 2>/dev/null || npm install -g pm2

echo "=== 3. 创建部署目录 ==="
mkdir -p $DEPLOY_DIR
cp /opt/selushen-mail-src/index.js $DEPLOY_DIR/
cp /opt/selushen-mail-src/package.json $DEPLOY_DIR/

echo "=== 4. 写入环境变量 ==="
cat > $DEPLOY_DIR/.env << EOF
SMTP_USER=$SMTP_USER
SMTP_PASS=$SMTP_PASS
RECEIVE_EMAIL=$RECEIVE_EMAIL
EOF

echo "=== 5. 安装依赖 ==="
cd $DEPLOY_DIR
npm install --production

echo "=== 6. 启动/重启 PM2 服务 ==="
pm2 delete selushen-mail 2>/dev/null || true
pm2 start index.js --name selushen-mail --env production
pm2 save
pm2 startup 2>/dev/null || true

echo "=== 7. 测试健康接口 ==="
sleep 2
curl -s http://127.0.0.1:3001/health && echo ""

echo "=== 部署完成 ==="
