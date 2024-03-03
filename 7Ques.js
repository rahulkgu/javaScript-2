function generateOtp() {
    var a = Math.floor(Math.random() * 10)
    var b = Math.floor(Math.random() * 10)
    var c = Math.floor(Math.random() * 10)
    var d = Math.floor(Math.random() * 10)
    console.log(`Here is your OTP: ${a}${b}${c}${d}`)
}
generateOtp()