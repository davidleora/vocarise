import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { getMessage } from "./api";

const App = () => {
    // メッセージを保持するステート
    const [message, setMessage] = useState<string>("");

    // コンポーネントのマウント時に実行される副作用
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                // バックエンドからメッセージを取得
                const msg = await getMessage();
                // メッセージをステートにセット
                setMessage(msg);
            } catch (error) {
                // エラーが発生した場合はエラーメッセージをセット
                setMessage("エラーが発生しました");
            }
        };
        // 非同期関数を呼び出し
        fetchMessage();
    }, []); // 空の依存配列により、コンポーネントのマウント時のみ実行される

    return (
        <div>
            <h1>VocaRise</h1>
            <p>{message}</p> {/* 取得したメッセージを表示 */}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
