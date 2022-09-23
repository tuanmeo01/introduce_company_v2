import React from "react";
import './Home.css'
import '../../image/logo.css'
import logo from '../../image/anh1.png'
import img from '../../image/architect.jpg'
class Home extends React.Component {
    render() {
        return (
            <>

                <header className="contain-header">
                    <img className="img-home" src={img} alt="Architechture"></img>
                    <div class="w3-display-middle w3-margin-top w3-center">
                        <h1 class="w3-xxlarge w3-text-white">
                            <span class="w3-padding w3-black w3-opacity-min">
                                <b>VIETDEFI</b>
                            </span>
                            <span class="w3-hide-small w3-text-light-grey">
                                Solution Tech
                            </span>
                            <span className="info-com">
                                <p>
                                    Công ty TNHH VIETDEFI(Vietname Definition)
                                </p>
                                <p className="info-com-com">
                                    Được thành lập từ 15/07/2021, tuy tuổi đời còn trẻ nhưng chúng tôi khởi nguồn từ một đội nhóm có kinh nghiệm lâu năm trong lĩnh vực Công nghệ thông tin.
                                    Xuất phát từ nhu cầu của thị trường, chúng tôi quyết định thành lập VIETDEFI lớn mạnh như bây giờ.
                                    Với tiêu chí chất lượng dịch vụ lên hàng đầu nên những sản phẩm của chúng tôi làm ra được test kỹ càng, đảm bảo khi đến tay khách hàng. 
                                </p>
                            </span>
                        </h1>
                    </div>
                </header>
               
            </>
        )
    }
}
export default Home;