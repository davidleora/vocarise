// 環境変数からバックエンドの URL を取得
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL; 

// メッセージを取得する非同期関数
export const getMessage = async(): Promise<string> => {
    try{
        // バックエンドのエンドポイントにリクエストを送信
        const response = await fetch(`${apiBaseUrl}/api/message`);

        // レスポンスが正常でない場合はエラーをスロー
        if (!response.ok) {
            throw new Error('API リクエストに失敗しました');
        }

        // レスポンスを JSON としてパースして message プロパティを返す
        const data = await response.json();
        return data.message;
    } catch (error) {
        // エラーをコンソールに出力
        console.error(error);

        // エラーを再スロー
        throw error;
    }
};