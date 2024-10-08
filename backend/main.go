package main

import (
	"net/http" // HTTP クライアントとサーバーを実装する標準ライブラリ

	"github.com/gin-contrib/cors" // Gin 用の CORS ミドルウェア
	"github.com/gin-gonic/gin"    // Gin Web フレームワーク
)

func main() {
	router := gin.Default()    // デフォルトのミドルウェア（logger、recovery）を持つ Gin のルーターを作成
	router.Use(cors.Default()) // CORS のデフォルト設定を適用

	// GET メソッドで /api/message にアクセスがあった場合の処理
	router.GET("/api/message", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{ // HTTP ステータスコード 200 と JSON データを返す
			"message": "Hello from the backend!", // レスポンスの内容
		})
	})

	router.Run(":8080") // ポート 8080 でサーバーを起動
}
