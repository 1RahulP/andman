const Footer = () =>{
    return(
        <div className="bg-[#0a1951] text-white sm:px-16 px-4 py-8">
            <div className="sm:flex justify-between gap-6 border-b border-white pb-12 px-6">
                <div>
                    <h3 className="text-3xl">Lets keep in touch!</h3>
                    <p className="mt-1">Connect with us</p>
                    <div className="mt-4 flex gap-4">
                        <img src="/svg/facebook.svg" alt="facebook" width={32} />
                        <img src="/svg/instagram.svg" alt="instagram" width={32} />
                    </div>
                </div>
               <div className="grid sm:grid-cols-2 gap-2 sm:mt-0 mt-6">
                <div>
                    <h3 className="sm:text-2xl text-xl mb-4">Useful Links</h3>
                    <ul className="grid gap-2 text-sm">
                        <li>About Us</li>
                        <li>Wiki</li>
                    </ul>
                </div>
                <div>
                    <h3 className="sm:text-2xl text-xl mb-4 sm:mt-0 mt-4">Other Resources</h3>
                    <ul className="grid gap-2 text-sm">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Payments, Refunds and Delivery</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
               </div>
            </div>
            <div className="text-center pt-8 text-sm">
                <h3>All Rights Reserved.</h3>
                <p>The Andamans by Xynocast Consultancy Services Pvt. Ltd..</p>
            </div>
        </div>
    )
}
export default Footer