import { Component } from 'react';
import Order from './Order';
import Contents from './Contents';
import { API } from '../../../config';

let orderId = [];
class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    fetch(`${API}/orders/cart`, {})
      .then(res => res.json())
      .then(data =>
        this.setState({
          data: data.result,
          sum: data.sum,
        })
      ); // 카트 받아오기
  }

  deleteHandler = id => {
    fetch(`${API}/orders/cart`, {
      method: 'PUT',
      body: JSON.stringify({
        user_id: 1,
        id: id,
      }), //장바구니 삭제
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          data: data.message,
          sum: data.sum,
        })
      );
  };

  updateCountSum = sum => {
    this.setState({
      sum: sum,
    });
  };

  orderHandler = () => {
    this.state.data.map(element => {
      orderId.push(element.id);
    }); //주문하기 버튼
    fetch(`${API}/orders/buy`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: 1,
        id: Array.from(new Set(orderId)),
      }),
    }).then(res => res.json());
  };

  render() {
    const { data } = this.state;
    return (
      <div className="basketForm">
        {data !== undefined &&
          data.map((elements, id) => (
            <Contents
              key={id}
              id={elements.id}
              title={elements.name}
              count={elements.quantity}
              image={elements.image_url}
              price={elements.real_price}
              deleteHandler={this.deleteHandler}
              updateCountSum={this.updateCountSum}
            />
          ))}
        <Order orderHandler={this.orderHandler} orderAmount={this.state.sum} />
      </div>
    );
  }
}

export default Form;
