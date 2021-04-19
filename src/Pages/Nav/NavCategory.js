import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/NavCategory.scss';

class NavCategory extends Component {
  constructor() {
    super();
    this.state = { categoryData: [] };
  }

  componentDidMount() {
    fetch('/data/CategoryList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryData: data,
        });
      });
  }

  render() {
    console.log(this.state.categoryData);
    return (
      <div className="navCategory">
        <div className="categoryLeft">
          <ul className="categoryLeftUl">
            <i className="fas fa-bars"></i>
            <li className="parentCategory">카테고리</li>
            <div className="categoryBox">
              <li className="category">
                <img
                  className="categoryImg"
                  src="/images/meatimg/소고기.jpg"
                  alt="소고기"
                />
                소
                <div className="subCategoryBox">
                  <li className="subCategory">소고기1</li>
                  <li className="subCategory">소고기2</li>
                </div>
              </li>
              <li className="subCategory">돼지</li>
              <li className="subCategory">닭</li>
              <li className="subCategory">염소</li>
              <li className="subCategory">양</li>
              <li className="subCategory">왕돼지</li>
              <li className="subCategory">채소</li>
              <li className="subCategory">소스</li>
            </div>

            {CATEGORYLEFT.map((el, id) => (
              <li className="categoryLeftLi" key={id}>
                <Link to="/" className="categoryLeftLink">
                  {el.content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="categoryRight">
          <ul className="categoryRightUl">
            {CATEGORYRIGHT.map((el, id) => (
              <li className="categoryRightLi" key={id}>
                <Link to="/" className="categoryRightLink">
                  {el.content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default NavCategory;

const CATEGORYLEFT = [
  { id: 1, content: '할인특가' },
  { id: 2, content: '신상품' },
  { id: 3, content: '베스트' },
  { id: 4, content: '더고기정육관' },
  { id: 5, content: '이달의맛집' },
  { id: 6, content: '7데이' },
  { id: 7, content: '정기식단' },
];
const CATEGORYRIGHT = [
  { id: 1, content: '로그인' },
  { id: 2, content: '회원가입' },
  { id: 3, content: '이벤트/혜택' },
];
