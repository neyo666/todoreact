import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Avatar extends Component {
    render() {
        return (
            <div>
              <Row>
                <Col xs={10}></Col>
                <Col xs={2}>
                  <Image src="https://www.google.ie/search?q=%E5%A4%B4%E5%83%8F&tbm=isch&imgil=cCLuOtAWzcyCwM%253A%253Bg-dB0Ge6zQRpiM%253Bhttp%25253A%25252F%25252Fwww.nipic.com%25252Fshow%25252F3%25252F26%25252F5688b4a645e8f60d.html&source=iu&pf=m&fir=cCLuOtAWzcyCwM%253A%252Cg-dB0Ge6zQRpiM%252C_&usg=__zHJ7a6AKRoDpynzotrEM4vL5kag%3D&biw=1280&bih=603&dpr=2&ved=0ahUKEwjnqYKaw6HTAhVLCsAKHTG6CjwQyjcIRA&ei=TnvvWOfKFsuUgAax9KrgAw" thumbnail circle />
                </Col>
              </Row>
            </div>
        );
    }
}

export default Avatar;