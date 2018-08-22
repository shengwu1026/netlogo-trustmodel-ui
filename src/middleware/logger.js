const logger = ( store ) => ( next ) => ( action ) => {
  console.group( action.type );
  console.log( "The action: ", action );
  // usually logger is the last step in the midlleware chain.
  // so the next action is dispatch
  const returnValue = next( action );
  console.log( 'The new state: ', store.getState() );
  console.groupEnd();
  return returnValue;
};

export default logger;