import React from "react";
import {Col, Modal, Row} from "antd";
const Details = ({details,ok,cancel,info}) =>{
    return(
        <>
            <Modal
                title="More Details"
                visible={details}
                onOk={ok}
                onCancel={cancel}
            >
                <Row>
                    <Col span={4}>
                        <img src={info.Poster}
                             style={{width: 150, height: 200}}
                        />
                    </Col>
                    <Col span={17} offset={3}>
                        <ul>
                            <li><strong>Title: </strong>{info.Title}</li>
                            <li><strong>Year: </strong>{info.Year}</li>
                            <li><strong>Released: </strong>{info.Released}</li>
                            <li><strong>Runtime: </strong>{info.Runtime}</li>
                            <li><strong>Genre: </strong>{info.Genre}</li>
                            <li><strong>Director: </strong>{info.Director}</li>
                            <li><strong>Actors: </strong>{info.Actors}</li>
                            <li><strong>Plot: </strong>{info.Plot}</li>
                            <li><strong>Languages: </strong>{info.Language}</li>
                            <li><strong>Country: </strong>{info.Country}</li>
                            <li><strong>Type: </strong>{info.Type}</li>
                        </ul>
                    </Col>
                </Row>
            </Modal>
        </>
    );
}
export default Details;