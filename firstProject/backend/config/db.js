import mongoose from "mongoose";
// mongoose = JSON 형태로 저장된 데이터를 객체로 다룰 수 있게 해주는 라이브러리.

// 다른 곳에서 재사용
// 다른 곳에서 이름 변경 불가능
// 한 파일에서 여러개 지정 가능
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // 1 = 실패. 0 = 성공
    }
}

// 다른 곳에서 재사용
// 다른 곳에서 이름 변경 가능
// 한 파일에서 한개 지정 가능