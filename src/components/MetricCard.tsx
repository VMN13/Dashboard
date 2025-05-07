interface MetricCardProps {
  title: string;
  value: string | number;
  isLoading: boolean;
  format?: 'percent' | 'number' | 'time';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, isLoading }) => {
  return (
    <div className="metric-card">
      <h3>{title}</h3>
      {isLoading ? <div>Loading...</div> :
        <div>{value}</div>}
    </div>
  );
};

export default MetricCard;