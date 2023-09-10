import schoolLogo from '../../assets/images/school-logo.png';

export default function Logo({ size }) {
  return (
    <div className="logo">
      <img src={schoolLogo} alt="School Logo" height={size} width={size} />
    </div>
  );
}