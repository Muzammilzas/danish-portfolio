import React from 'react';
import { Paper, Typography, Button, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { Check } from '@mui/icons-material';

interface PricingCardProps {
  title: string;
  price: string | number;
  yearlyPrice?: string | number;
  tagline: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  isYearly?: boolean;
  onCtaClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  yearlyPrice,
  tagline,
  features,
  ctaText,
  isPopular = false,
  isYearly = false,
  onCtaClick,
}) => {
  const displayPrice = isYearly ? yearlyPrice : price;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Paper
        elevation={0}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          p: 4,
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 4,
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(124, 58, 237, 0.15)',
            background: 'rgba(255, 255, 255, 0.9)',
            '& .glow-button': {
              '&::before': {
                opacity: 1,
              },
            },
          },
        }}
      >
        {isPopular && (
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              right: -35,
              background: 'linear-gradient(45deg, #7C3AED, #EC4899)',
              color: 'white',
              py: 1,
              px: 4,
              transform: 'rotate(45deg)',
              width: 140,
              textAlign: 'center',
              fontSize: '0.85rem',
              fontWeight: 600,
              zIndex: 1,
              boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)',
            }}
          >
            Most Popular
          </Box>
        )}

        <Typography
          variant="h3"
          sx={{
            mb: 1,
            fontSize: '1.75rem',
            fontWeight: 700,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mb: 3,
            color: 'text.secondary',
            minHeight: '48px',
          }}
        >
          {tagline}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mb: 3,
            display: 'flex',
            alignItems: 'baseline',
            color: 'primary.main',
            fontWeight: 700,
          }}
        >
          {typeof displayPrice === 'number' ? (
            <>
              <Box component="span" sx={{ fontSize: '1.5rem', mr: 0.5 }}>$</Box>
              {displayPrice}
            </>
          ) : (
            displayPrice
          )}
          {typeof displayPrice === 'number' && (
            <Box component="span" sx={{ fontSize: '1rem', color: 'text.secondary', ml: 1 }}>
              /{isYearly ? 'year' : 'month'}
            </Box>
          )}
        </Typography>

        <List sx={{ mb: 4 }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <ListItem
                sx={{
                  px: 0,
                  py: 0.5,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Check
                    sx={{
                      color: 'primary.main',
                      filter: 'drop-shadow(0 0 8px rgba(124, 58, 237, 0.3))',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: '0.95rem',
                      color: 'text.secondary',
                    }
                  }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>

        <Button
          className="glow-button"
          variant="contained"
          fullWidth
          onClick={onCtaClick}
          sx={{
            py: 1.5,
            background: isPopular 
              ? 'linear-gradient(45deg, #7C3AED, #EC4899)'
              : undefined,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(124, 58, 237, 0.5), rgba(236, 72, 153, 0.5))',
              filter: 'blur(15px)',
              opacity: 0,
              transition: 'opacity 0.3s ease-in-out',
              zIndex: -1,
            },
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(124, 58, 237, 0.25)',
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
        >
          {ctaText}
        </Button>
      </Paper>
    </motion.div>
  );
};

export default PricingCard; 