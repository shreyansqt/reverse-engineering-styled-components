const styled = (...args1) => (...args2) => {
  console.log({ args1, args2 });
};

export default styled;
