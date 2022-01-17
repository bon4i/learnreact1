import React from 'react';

const Postitem = (props) => {
   return (
   <div className="App">
      <div className='post'>
        <div className='post__content'>
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className='post__btns'>
          <button>Удалить</button>
          </div>
      </div>
    </div>
  );
};

export default Postitem;