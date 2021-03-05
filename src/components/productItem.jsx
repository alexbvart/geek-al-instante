import React from 'react';
import '../styles/productoItem.css'

const ProductItem = ({ _id, urlImage, name, edit = true }) => {
    return (
        <article className="product" >
            <div className="product__image">
                <img src={urlImage} alt={name} />
            </div>
                {/* <h3>{name} </h3> */}

            {/* <div>
            {(edit)
            ?   (<>
                    <button onClick={()=>addStarter(playerSelected)}      >Starters   </button>
                    <button onClick={()=>addSubstitutes(playerSelected)}  >Substitutes</button>
                </>)
            :   (<>
                    <button onClick={()=>backToTheBench(playerSelected)} >X            </button>
                </>)
            }
        </div> */}

        </article>
    );
}

/* const mapStateToProps = (state) => ({
    player: state.player
})

const mapDispatchToProps  = (dispatch) => ({
    addStarter(playerSelected){

        dispatch({
            type: "ADD_STARTER",
            playerSelected
        })

    },

    addSubstitutes(playerSelected){
        dispatch({
            type: "ADD_SUBSTITUES",
            playerSelected
        })
    },

    backToTheBench(playerSelected){
        dispatch({
            type: "BACK_TO_THE_BENCH",
            playerSelected
        })
    }

})


export default connect(mapStateToProps, mapDispatchToProps)(ProductItem) */
export default ProductItem
