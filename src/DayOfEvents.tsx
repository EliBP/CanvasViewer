import Box from '@mui/joy/Box';
import EventCard from './EventCard';
import Typography from '@mui/joy/Typography';

// Define the event type
interface EventType {
    id: number;
    class: string;
    event: string;
    date: string;
    time: string;
    points: string;
    teacher?: string;
}

// Define the props for DayOfEvents component
interface DayOfEventsProps {
    eventsForDay: EventType[];
}

// Define the DayOfEvents component
export default function DayOfEvents({ eventsForDay }: DayOfEventsProps) {
    return (
        <Box
            sx={{
                textAlign: 'left',
                padding: 0,
            }}
        >
            <Typography level='title-md'>
                {eventsForDay[0].date}
            </Typography>
            {eventsForDay.map((event: EventType) => <EventCard key={event.id} eventDetail={event} />)}
        </Box>

    );
}