const fetchWithRefresh = async ( url , options = {})=>{
    const req = await fetch(url , options)

    if(req.ok){
        return req
    }


    if(req.status === 401){
        const refreshReq = await fetch("http://localhostL4090/refresh" ,{
            method: "POST",
            credentials: "include"
        })

        if(refreshReq.ok){
            return refreshReq   
            // this will give another 15 min of access token
        }

        if(!refreshReq.ok){
            window.location.href = "/login"
            return refreshReq.message
        }
    }

    // what if refresh token which last 30 days expires too then also 
}

export default fetchWithRefresh