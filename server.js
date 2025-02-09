const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Данные с PIN-кодами
const pins = {
    "0182": "operator/op1/key013242/index.html",
    "5932": "operator/op2/key163124/index.html",
    "6832": "operator/op3/key001381/index.html"
};

// Обработка запросов проверки PIN
app.post('/check-pin', (req, res) => {
    const { pin } = req.body;

    if (pins[pin]) {
        res.json({ success: true, redirect: pins[pin] });
    } else {
        res.json({ success: false, message: "Invalid PIN" });
    }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
