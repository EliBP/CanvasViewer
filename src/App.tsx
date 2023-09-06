import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import DayOfEvents from './DayOfEvents';

export default function App() {

  const events = [
    {
      id: 1,
      class: 'COMPUTER SCIENCE 1ST YR SEM asdfasdf;slkj ',
      event: 'Professional and Personal Development- Event Reflection #1',
      date: '9/10/2023',
      time: '11:59 pm',
      points: '100',
      teacher: 'Ms. teacher'
    },
    {
      id: 2,
      class: 'MGT_1064_87784_202309',
      event: 'REAL PS 2',
      date: '9/13/2023',
      time: '11:59 pm',
      points: '10'
    }
  ]

  function groupEventsByDate(events: any[]) {
    return events.reduce((acc, event) => {
      const date = event.date;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(event);
      return acc;
    }, {} as Record<string, any[]>);
  }

  const groupedEvents = groupEventsByDate(events);

  return (
    <Sheet sx={{ width: 350, height: 600 }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        padding={1}
      >
        <Typography level="h2">
          Canvas Events
        </Typography>
        {Object.keys(groupedEvents).map(date => (
          <DayOfEvents key={date} eventsForDay={groupedEvents[date]} />
        ))}
      </Stack>
    </Sheet>
  );
}