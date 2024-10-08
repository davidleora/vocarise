# backend/Dockerfile

# ベースイメージを Go 1.23 に設定
FROM golang:1.23-alpine

# 作業ディレクトリを設定
WORKDIR /app

# Go Modules のキャッシュを活用
COPY go.mod go.sum ./
RUN go mod download

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN go build -o main .

# ポートを公開
EXPOSE 8080

# アプリケーションを実行
CMD ["./main"]
