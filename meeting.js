import React,{useEffect, Fragment} from "react"

const Meeting = ({playload}) =>{
    useEffect(async () => {
        const {ZoomMtg} = await import("@zoomus/websdk")
        ZoomMtg.setZoomJSLib('https://source.zoom.us/lib','/av')
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();

        ZoomMtg.generateSDKSignature(
            {
                meetingNumber: playload.meetingNumber,
                role: playload.role,
                sdkKey: playload.sdkKey,
                sdkSecret: playload.sdkSecret,
                success: function(signature){
                    ZoomMtg.init({
                        leaveUrl: playload.leaveUrl,
                        success: function(data){
                            ZoomMtg.join({
                                meetingNumber: playload.meetingNumber,
                                signature: signature.result,
                                sdkKey: playload.sdkKey,
                                userName: playload.userName,
                                passWord: playload.passWord,
                                tk:'',
                                success: function(){
                                    console.log("joined")

                                },
                                error: function(error){
                                    console.log(error)
                                }
                            })
                        } ,
                        error: function(error){
                            console.log(error)
                        }
                    })
                },
                error: function(error){
                    console.log(error)
                }

            
            }
        )
    },[])
    return(<h1>Meeting</h1>)
}

export default Meeting