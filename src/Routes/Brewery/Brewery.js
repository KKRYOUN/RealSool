import React from "react";
import { Routes, Route } from 'react-router-dom';

import BreweryMap from "./BreweryMap";
import BreweryList from "./BreweryList";
import BreweryView from "./BreweryView";

import breweryImage from './Image/breweryImage.jpg';

const Brewery = () => {

  const breweries = [
    { num: 1, image: breweryImage, name: '고도리 와이너리', address: '경북 영천시 고경면 고도리 494-3', category: '과실주', tel: '054-335-3174', Link: '양조장 보기' },
    { num: 2, image: breweryImage, name: '국순당', address: '강원도 횡성군 둔내면 현천리 120', category: '탁주,증류주', tel: '033-340-4300', Link: '양조장 보기' },
    { num: 3, image: breweryImage, name: '그린영농조합', address: '경기도 안산시 단원구 뻐꾹산길 107', category: '과실주', tel: '032-886-9873', Link: '양조장 보기' },
    { num: 4, image: breweryImage, name: '금정산성 토산주', address: '부산 금정구 산성로 453', category: '탁주', tel: '051-517-6552', Link: '양조장 보기' },
    { num: 5, image: breweryImage, name: '금풍양조', address: '인천 강화군 길상면 삼랑성길 8', category: '탁주', tel: '07044001931', Link: '양조장 보기' },
    { num: 6, image: breweryImage, name: '대강양조장', address: '충북 단양군 대강면 대강로 60', category: '탁주,약주,청주', tel: '043-422-0077', Link: '양조장 보기' },
    { num: 7, image: breweryImage, name: '대대로영농조합법인', address: '전남 진도군 군내면 둔전리 98', category: '증류주', tel: '061-542-3399', Link: '양조장 보기' },
    { num: 8, image: breweryImage, name: '덕유양조', address: '전라북도 무주군 안성면 장무로 1375-7', category: '과실주', tel: '0633232355', Link: '양조장 보기' },
    { num: 9, image: breweryImage, name: '도란원', address: '충청북도 영동군 매곡면 옥전리 825-1', category: '과실주', tel: '043-743-2109', Link: '양조장 보기' },
    { num: 10, image: breweryImage, name: '두레양조', address: '충청남도 천안시 서북구 입장면 율목길 17-6', category: '과실주,증류주,리큐르/기타주류', tel: '0415858213', Link: '양조장 보기' },
    { num: 11, image: breweryImage, name: '맑은내일', address: '경남 창원시 삼귀로 411-8', category: '탁주,약주, 청주', tel: '0552640996', Link: '양조장 보기' },
    { num: 12, image: breweryImage, name: '명인안동소주', address: '경북 안동시 풍산읍 산업단지6길 6', category: '증류주', tel: '054-856-6903', Link: '양조장 보기' },
    { num: 13, image: breweryImage, name: '모월', address: '	강원 원주시 판부면 판부신촌길 84', category: '약주, 청주,증류주', tel: '033-748-8008', Link: '양조장 보기' },
    { num: 14, image: breweryImage, name: '문경주조', address: '경상북도 문경시 동로면 노은리 192번지', category: '탁주,약주, 청주', tel: '054-552-8285', Link: '양조장 보기' },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<BreweryMap breweries={breweries}/>} />
        <Route path="/breweryList" element={<BreweryList breweries={breweries}/>} />
        <Route path="/breweryView/:num" element={<BreweryView breweries={breweries}/>} />
      </Routes>
    </>
  )
}

export default Brewery;