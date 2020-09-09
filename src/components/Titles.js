import React, {useState} from "react";
import {Button, Input, Typography} from "antd";
import {SearchOutlined} from "@ant-design/icons";
const Titles = ({search}) =>{
    const { Title } = Typography;
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        setSearchValue('');
        search(searchValue);
    }
    return (
        <>
        <Title>Information about movies, series and much more</Title>
        <Input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} style={{width:500}} id={'movie'} placeholder="Enter name of movie, series...." />
        <Button className={'test'} type="primary" shape="circle" icon={<SearchOutlined />} onClick={handleSearch}/>
        <br/>
        <br/>
        </>
);
}
export default Titles;