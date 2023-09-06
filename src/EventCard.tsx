import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import MoreEventInformation from './MoreEventInformation';
import Chip from '@mui/joy/Chip';

type EventDetailType = {
    id: number;
    class: string;
    event: string;
    date: string;
    time: string;
};

export default function EventCard({ eventDetail }: { eventDetail: EventDetailType }) {
    return (
        <Tooltip
            enterDelay={750}
            enterNextDelay={750}
            title={<MoreEventInformation key={eventDetail.id} eventDetail={eventDetail} />}
            variant="soft"
            sx={{ mb: -1, mr: -1, mt: -2 }}
        >
            <Card
                variant="outlined"
                orientation="horizontal"
                sx={{
                    width: 300,
                    display: 'flex',
                    boxShadow: 'lg',
                    padding: 1,
                    gap: 0
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 0,
                        border: 'none'
                    }}
                >
                    <Chip size="sm" variant="outlined"
                        sx={{
                            height: 30
                        }}>
                        {eventDetail.time}
                    </Chip>
                </Box>
                <Box
                    sx={{
                        margin: 0,
                        padding: 1,
                        flexGrow: 1,
                        overflow: 'hidden',
                    }}>
                    <Typography
                        noWrap
                        level="body-xs"
                        sx={{
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {eventDetail.class}
                    </Typography>
                    <Typography
                        noWrap
                        level="h4"
                        sx={{
                            textOverflow: 'ellipsis',
                        }}>
                        {eventDetail.event}
                    </Typography>
                </Box>
            </Card >
        </Tooltip >

    );
}