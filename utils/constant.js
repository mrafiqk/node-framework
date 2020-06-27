exports.OTPDeactivateReason = (id)=>{
    let reasons = {
        "1":"MORETHENTHREEMINITS",
        "2":"SUCCESSFULLYENTERED"
    }

    return reasons[id]
}