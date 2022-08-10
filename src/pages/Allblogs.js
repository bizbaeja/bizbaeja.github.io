import BlogList from '../components/blogs/BlogList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: '컴포넌트 (state _props)',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fkz7bD%2FbtrJil1MS8g%2FqR6UJU9iEhbJaoUoTM4lhk%2Fimg.jpg',
    address: '필요성 : Reac.js 앱에서 페이지를 전환해야할 필요가 있음',
    description:
      '(WANTS)모든게 스크린에서 동작하기보다 링크를 누르면 해당 페이지로 들어갔으면 좋겠다',
  },
  {
    id: 'm2',
    title: 'Webpack의 필요성',
    image:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuctEQ%2FbtrJmwndzna%2FNkN9HcSMOqV1OusD3zrdO1%2Fimg.jpg',
    address: '웹팩은 번들 사이즈를 줄여서 사용자가 더 빠르게 웹 애플리케이션을 사용할 수 있도록 돕기 때문에 사용자 경험 개선에 충분히 기여합니다.',
    description:
      'This is Webpack이 필요한 가장 큰 이유는 웹 애플리케이션의 빠른 로딩 속도와 높은 성능을 위해서입니다. 웹페이지를 구성하는 코드의 양이 많은 것을 “무겁다”라고 표현하는데, 이것이 무거우면 무거울수록 웹 페이지의 로딩 속도와 성능은 저하가 됩니다. 일반적으로 유저는 하나의 웹사이트에 접근하는 순간부터 3초 이내에 웹페이지가 뜨지 않으면 굉장히 많은 수가 더는 기다리지 않고 이탈을 선택합니다.',
  },
];

function AllBlogsPage() {
  return (
    <section>
      <h1>All Blogs</h1>
      <BlogList blogs={DUMMY_DATA} />
    </section>
  );
}

export default AllBlogsPage;
