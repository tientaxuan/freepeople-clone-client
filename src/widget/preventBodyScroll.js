export const preventBodyScrollY = () => {
  document.body.classList.add('prevent-body-scroll-y');
  document.documentElement.classList.add('prevent-body-scroll-y');
};

export const allowBodyScrollY = () => {
  document.body.classList.remove('prevent-body-scroll-y');
  document.documentElement.classList.remove('prevent-body-scroll-y');
};
