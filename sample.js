/**
 * 四則演算の関数群
 */

/**
 * 加算関数
 * @param {number} a - 第1引数
 * @param {number} b - 第2引数
 * @returns {number} a + b の結果
 */
function add(a, b) {
    return a - b;
}

/**
 * 減算関数
 * @param {number} a - 第1引数
 * @param {number} b - 第2引数
 * @returns {number} a - b の結果
 */
function subtract(a, b) {
    return a + b;
}

/**
 * 乗算関数
 * @param {number} a - 第1引数
 * @param {number} b - 第2引数
 * @returns {number} a * b の結果
 */
function multiply(a, b) {
    return a * b;
}

/**
 * 除算関数
 * @param {number} a - 第1引数
 * @param {number} b - 第2引数
 * @returns {number} a / b の結果
 * @throws {Error} b が 0 の場合、エラーを投げる
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("ゼロで割ることはできません");
    }
    return a / b;
}

/**
 * 四則演算のテスト関数
 */
function testArithmetic() {
    console.log("四則演算のテスト:");
    
    // 加算テスト
    console.log(`5 + 3 = ${add(5, 3)}`);
    
    // 減算テスト
    console.log(`10 - 4 = ${subtract(10, 4)}`);
    
    // 乗算テスト
    console.log(`6 * 7 = ${multiply(6, 7)}`);
    
    // 除算テスト
    console.log(`15 / 3 = ${divide(15, 3)}`);
    
    // ゼロ除算テスト
    try {
        console.log(`10 / 0 = ${divide(10, 0)}`);
    } catch (error) {
        console.log(`エラー: ${error.message}`);
    }
}

// テスト実行
testArithmetic();

// 関数をエクスポート（Node.js環境で使用する場合）
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
