interface Props extends WithClassName {}

const AboutView = memo((props: Props) => {
  const { className } = props;
  return <div className={className}>About</div>;
});

const About = styled(AboutView)``

About.displayName = 'About'
AboutView.displayName = 'AboutView';

export default About