import { Row } from "@/components/flex";

interface Props extends WithClassName {}

const LayoutView = memo((props: Props) => {
  const { className } = props;
  const [routeProps, setRouteProps] = useState<ObjectType>()

  return <div className={className}>
    <Row style={{gap: '20px'}}>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
    </Row>
    
    <Outlet context={[routeProps, setRouteProps]} />
  </div>;
});

const Layout = styled(LayoutView)``

Layout.displayName = 'Layout'
LayoutView.displayName = 'LayoutView';

export default Layout