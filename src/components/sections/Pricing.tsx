import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Switch, FormControlLabel } from '@mui/material';
import { motion } from 'framer-motion';
import PricingCard from '../PricingCard';

const pricingPlans = [
  {
    title: 'Starter',
    price: 99,
    yearlyPrice: 950,
    tagline: 'Launch your vision with ease.',
    features: [
      'Custom React website (up to 5 pages)',
      'Mobile-responsive design',
      'Basic SEO optimization',
      '1 month of free support',
      'Hosting included',
    ],
    ctaText: 'Get Started',
  },
  {
    title: 'Pro',
    price: 249,
    yearlyPrice: 2490,
    tagline: 'Scale up with style.',
    features: [
      'Custom React website (up to 15 pages)',
      'Advanced animations & interactivity',
      'E-commerce integration (up to 50 products)',
      'Enhanced SEO + analytics setup',
      '3 months of free support',
      'Premium hosting + CDN',
    ],
    ctaText: 'Level Up',
    isPopular: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom Quote',
    yearlyPrice: 'Custom Quote',
    tagline: 'Unleash limitless potential.',
    features: [
      'Fully custom React solution',
      'Unlimited pages & features',
      'API integrations & custom backend',
      'Dedicated designer + developer',
      'Priority support (24/7)',
      'Enterprise-grade hosting',
    ],
    ctaText: 'Contact Us',
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanChange = () => {
    setIsYearly(!isYearly);
  };

  return (
    <Box sx={{ position: 'relative', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)',
          zIndex: -1,
        }}
      />
      
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #7C3AED, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
              }}
            >
              Modern Sites, Built Your Way
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto', fontSize: '1.125rem', mb: 4 }}
            >
              We craft pixel-perfect, high-performance websites with React, tailored to your brand. 
              No templates, no limits—just cutting-edge design and seamless functionality.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
              <Typography
                variant="body1"
                sx={{ 
                  color: !isYearly ? 'primary.main' : 'text.secondary',
                  fontWeight: !isYearly ? 600 : 400,
                }}
              >
                Monthly
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={isYearly}
                    onChange={handlePlanChange}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#7C3AED',
                        '&:hover': {
                          backgroundColor: 'rgba(124, 58, 237, 0.08)',
                        },
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#7C3AED',
                      },
                    }}
                  />
                }
                label=""
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  variant="body1"
                  sx={{ 
                    color: isYearly ? 'primary.main' : 'text.secondary',
                    fontWeight: isYearly ? 600 : 400,
                  }}
                >
                  Yearly
                </Typography>
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  Save 20%
                </Box>
              </Box>
            </Box>
          </Box>

          <Grid container spacing={4}>
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} md={4} key={plan.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <PricingCard
                    {...plan}
                    isYearly={isYearly}
                    onCtaClick={() => console.log(`Selected ${plan.title} plan (${isYearly ? 'yearly' : 'monthly'})`)}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Additional features section */}
          <Box sx={{ mt: 12, textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Why Choose Us?
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                {
                  title: 'Custom Development',
                  description: 'Tailored solutions that perfectly match your brand and requirements.',
                },
                {
                  title: 'Modern Technology',
                  description: 'Built with React and the latest web technologies for optimal performance.',
                },
                {
                  title: 'Dedicated Support',
                  description: 'Expert support to ensure your website runs smoothly and efficiently.',
                },
              ].map((feature, index) => (
                <Grid item xs={12} md={4} key={feature.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 4,
                        bgcolor: 'background.paper',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                        height: '100%',
                      }}
                    >
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Pricing; 