import { Button, Grid } from '@mui/material';

interface Props {
  id: string;
  name: string;
  date: string;
  shipTo: string;
  paymentMethod: string;
  amount: number;
  onSelectOrder: (id: string) => void;
  onDeleteSelectedOrder: (id: string) => void;
  isSelected: boolean;
}

const OrderItem = ({
  id,
  name,
  date,
  shipTo,
  paymentMethod,
  amount,
  onSelectOrder,
  onDeleteSelectedOrder,
  isSelected,
}: Props) => (
  <Grid
    container
    sx={{
      borderTop: '2px solid #e5e5e5',
      padding: '10px 0',
      background: isSelected ? '#f6f6f6' : '',
    }}
  >
    <Grid size={{ xs: 1 }} component="div">
      {id}
    </Grid>
    <Grid size={{ xs: 1.8 }} component="div">
      {date}
    </Grid>
    <Grid size={{ xs: 1.8 }} component="div">
      {name}
    </Grid>
    <Grid size={{ xs: 1.8 }} component="div">
      {shipTo}
    </Grid>
    <Grid size={{ xs: 1.8 }} component="div">
      {paymentMethod}
    </Grid>
    <Grid size={{ xs: 1.8 }} component="div">
      {amount}
    </Grid>
    <Grid size={{ xs: 1.2 }} component="div">
      {!isSelected && <Button onClick={() => onSelectOrder(id)}>add</Button>}
      {isSelected && <Button onClick={() => onDeleteSelectedOrder(id)}>remove</Button>}
    </Grid>
  </Grid>
);

export default OrderItem;
