import React from 'react';
import './FirstLayout.scss';

function FirstLayout() {
  return (
    <>
      <div className='grid-container'>
        <div className='header'>
          <img
            className='image-styles'
            alt='school'
            src='/images/Guelph_U.jpeg'
          />
          HEADERs
          <p className='test-text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            commodi quos earum quod dolore, ducimus enim nihil, dolores
            consequuntur nostrum nam doloremque corporis fugiat facilis
            voluptates optio ullam accusamus eos? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Deserunt commodi quos earum quod
            dolore, ducimus enim nihil, dolores consequuntur nostrum nam
            doloremque corporis fugiat facilis voluptates optio ullam accusamus
            eos? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Deserunt commodi quos earum quod dolore, ducimus enim nihil, dolores
            consequuntur nostrum nam doloremque corporis fugiat facilis
            voluptates optio ullam accusamus eos? elit. Deserunt commodi quos
            earum quod dolore, ducimus enim nihil, dolores consequuntur nostrum
            nam doloremque corporis fugiat facilis voluptates optio ullam
            accusamus eos? elit. Deserunt commodi quos earum quod dolore,
            ducimus enim nihil, dolores consequuntur nostrum nam doloremque
            corporis fugiat facilis voluptates optio ullam accusamus eos? elit.
            Deserunt commodi quos earum quod dolore, ducimus enim nihil, dolores
            consequuntur nostrum nam doloremque corporis fugiat facilis
            voluptates optio ullam accusamus eos?
          </p>
        </div>
        <div className='menu'>
          <img className='kang-img' alt='school' src='/images/Kang.jpeg' />
          MENU
        </div>
        <div className='content'>
          <p className='test-text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            commodi quos earum quod dolore, ducimus enim nihil, dolores
            consequuntur nostrum nam doloremque corporis fugiat facilis
            voluptates optio ullam accusamus eos?
          </p>
          CONTENT
        </div>
        <div className='my-footer'>FOOTER</div>
      </div>
    </>
  )
}

export default FirstLayout;