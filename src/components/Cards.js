import React from "react";
import {Avatar, Button, Card} from "antd";
import {CommentOutlined, EyeOutlined, UserOutlined} from "@ant-design/icons";
const Cards = ({movies,details,comments})=>{
    const { Meta } = Card;
    return(
        <>
    {movies ?
        movies.map((movie,index)=>(
            <div className={'cards'}>
                <Card key={index}
                      style={{width: 400}}
                      cover={
                          <img className={'img-movie'}
                               style={{width: 280, height: 320}}
                               src={movie.Poster}
                          />
                      }
                      actions={[
                          <Button type="ghost" shape="circle" icon={<EyeOutlined key="details"/>} onClick={()=>details(index)}/>,
                          <Button type="default" shape="circle" icon={<CommentOutlined key="comment"/>}onClick={()=>comments(index)}/>,
                      ]}
                >
                    <Meta
                        avatar={<Avatar style={{backgroundColor: '#229ade'}} icon={<UserOutlined/>}/>}
                        title={movie.Title}
                        description={movie.Type}
                    />
                </Card>
            </div>
        ))
        : ''
    }
    </>
    );

}
export default Cards;