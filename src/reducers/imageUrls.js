const initialState = [];

const imageUrls = (state = initialState, action) => {
  switch (action.type) {
    // action.payload に data が乗ってくる
    case "RECEIVE_DATA":
      return action.payload;

    default:
      return state;
  }
};

export default imageUrls;
