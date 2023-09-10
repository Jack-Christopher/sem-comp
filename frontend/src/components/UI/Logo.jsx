import schoolLogo from '../../assets/images/school-logo.png';

export default function Logo({ size, className }) {
  if (!size) size = 40;

  return (
    <div className={className}>
      <img src={schoolLogo} alt="School Logo" height={size} width={size} />
    </div>
  );
}