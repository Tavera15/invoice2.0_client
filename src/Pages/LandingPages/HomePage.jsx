import React from "react";
import HomeNav from "../../Components/LandingNav";

function HomePage()
{

    return(
        <div className="d-flex">
            <HomeNav />

            <div className="work-area-base col-md-9 text-light d-flex col justify-content-center align-items-center p-4" 
                    style={{
                    "backgroundImage": "url(https://img.freepik.com/premium-photo/cozy-home-office-with-desk-computer-warm-lighting-vector-illustration-flat-style_1029473-422475.jpg)", 
                    "filter": "brightness(.8)",}}>
                
                <div className="text-light col-12 col-md-8 rounded bg-dark border p-4"
                    style={{"filter": "brightness(1)", opacity: .95}}>
                    <h1 className="display-1">Tavera Invoice</h1>
                    <hr />
                    <h3>Your personal invoice book that allows you to instantly make invoices straight from your web browser.</h3>
                </div>
            </div>
        </div>
    )
}

export default HomePage;

//https://1.bp.blogspot.com/-hqjU2x-AbTY/YH8VK8jiGoI/AAAAAAAABE0/IVdksicp9KYxvhM5iYtS8Wp0r2RnvoYmwCLcBGAsYHQ/s1280/Side%2BNavigation%2BMenu%2BBar%2Bin%2BHTML%2BCSS.webp
// https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-07/a1985720-3865-11eb-bcbe-7daa1ab28fd4.jpg