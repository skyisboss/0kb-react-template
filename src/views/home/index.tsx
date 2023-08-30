
interface Props extends WithClassName {}

const HomePageView = memo((props: Props) => {
  const { className } = props;
  const age = usePersonAge()
  const name = usePersonName()
  
  return <div className={className}>
    HomePage = {age}/{name}
  </div>;
});

const HomePage = styled(HomePageView)``

HomePage.displayName = 'HomePage'
HomePageView.displayName = 'HomePageView';

export default HomePage