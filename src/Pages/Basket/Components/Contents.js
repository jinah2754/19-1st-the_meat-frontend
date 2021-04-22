import { Component } from 'react';
import Image from './ContentsComponents/Image';
import Title from './ContentsComponents/Title';
import Price from './ContentsComponents/Price';
import Count from './ContentsComponents/Count';
import Amount from './ContentsComponents/Amount';
import Delete from './ContentsComponents/Delete';
import { API } from '../../../config';
import './Contents.scss';

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      id: this.props.id,
    };
    console.log(API);
  }

  updateCount = count => {
    this.setState({
      count: count,
    });
    fetch(`${API}/orders/cart`, {
      method: 'PATCH',
      body: JSON.stringify({
        user_id: 1, //개수 수정시 백과 통신
        id: this.state.id,
        quantity: count,
      }),
    })
      .then(res => res.json())
      .then(data => this.props.updateCountSum(data.sum));
  };

  render() {
    const { deleteHandler, count, image, title, id, price } = this.props;
    return (
      <ul id={id} className="basketContents">
        <Image image={image} alt={title} />
        <Title title={title} />
        <Price price={price} />
        <Count count={count} updateCount={this.updateCount} />
        <Amount price={price} count={this.state.count} />
        <Delete id={id} deleteHandler={deleteHandler} />
      </ul>
    );
  }
}

export default Contents;
