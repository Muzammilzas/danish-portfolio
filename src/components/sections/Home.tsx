import React from 'react';
import { Container, Grid, Typography, Button, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowForward, Code, Brush, Speed } from '@mui/icons-material';

const FloatingShape = ({ delay, children, x, y }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: 1,
      y: [y, y + 20, y],
      x: [x, x + 10, x],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    style={{
      position: 'absolute',
      zIndex: 0,
    }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated background shapes */}
      <FloatingShape delay={0} x={-20} y={100}>
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: '28%',
            background: 'linear-gradient(45deg, #7C3AED22, #7C3AED11)',
            filter: 'blur(3px)',
          }}
        />
      </FloatingShape>
      <FloatingShape delay={0.5} x={200} y={400}>
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #EC489922, #EC489911)',
            filter: 'blur(2px)',
          }}
        />
      </FloatingShape>
      <FloatingShape delay={1} x={800} y={100}>
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '20px',
            background: 'linear-gradient(45deg, #7C3AED15, #EC489915)',
            filter: 'blur(2px)',
            transform: 'rotate(45deg)',
          }}
        />
      </FloatingShape>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            minHeight: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 250px)' },
          }}
        >
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box sx={{ mb: 4 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      display: 'inline-block',
                      background: 'linear-gradient(45deg, #7C3AED, #EC4899)',
                      color: 'white',
                      px: 2,
                      py: 1,
                      borderRadius: 100,
                      mb: 2,
                      fontWeight: 600,
                      boxShadow: '0px 4px 20px rgba(124, 58, 237, 0.25)',
                    }}
                  >
                    ✨ Welcome to my creative space
                  </Typography>
                </motion.div>
                
                <Typography
                  variant="h1"
                  sx={{
                    background: 'linear-gradient(45deg, #7C3AED, #EC4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 2,
                    fontWeight: 800,
                  }}
                >
                  Hi, I'm Danish
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ 
                    mb: 3, 
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    fontWeight: 600,
                    color: 'text.secondary',
                    position: 'relative',
                  }}
                >
                  Creative Developer & Designer
                </Typography>

                {/* Feature cards */}
                <Box sx={{ my: 4 }}>
                  <Grid container spacing={2}>
                    {[
                      { icon: <Code />, title: 'Clean Code', color: '#7C3AED' },
                      { icon: <Brush />, title: 'Creative Design', color: '#EC4899' },
                      { icon: <Speed />, title: 'Performance', color: '#6366F1' },
                    ].map((feature, index) => (
                      <Grid item xs={12} sm={4} key={feature.title}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <Box
                            sx={{
                              p: 2,
                              borderRadius: 4,
                              bgcolor: 'background.paper',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                              '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
                              },
                              transition: 'all 0.3s ease-in-out',
                            }}
                          >
                            <Box sx={{ color: feature.color }}>{feature.icon}</Box>
                            <Typography variant="body2" fontWeight={600}>
                              {feature.title}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Typography
                  variant="body1"
                  sx={{ 
                    mb: 4,
                    maxWidth: '600px',
                    fontSize: '1.125rem',
                    color: 'text.secondary',
                    position: 'relative',
                  }}
                >
                  I create beautiful, responsive, and user-friendly websites that help businesses grow and succeed in the digital world. As a gay developer, I bring unique perspectives and creativity to every project.
                </Typography>
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={Link}
                      to="/portfolio"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<ArrowForward />}
                      sx={{ 
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        background: 'linear-gradient(45deg, #7C3AED, #EC4899)',
                      }}
                    >
                      View My Work
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      color="primary"
                      size="large"
                      sx={{ 
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                      }}
                    >
                      Get in Touch
                    </Button>
                  </motion.div>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box sx={{ position: 'relative' }}>
                {/* Decorative elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    background: 'linear-gradient(45deg, #7C3AED22, #EC489922)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    zIndex: -1,
                  }}
                />
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                  alt="Developer workspace"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 6,
                    boxShadow: (theme) => `0 20px 40px ${theme.palette.primary.main}25`,
                    transform: 'perspective(1000px) rotateY(-5deg)',
                    transition: 'all 0.5s ease-in-out',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg) translateY(-10px)',
                      boxShadow: (theme) => `0 30px 60px ${theme.palette.primary.main}35`,
                    },
                  }}
                />
                {/* Code snippet decoration */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -30,
                    right: -20,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    p: 2,
                    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
                    display: { xs: 'none', md: 'block' },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'monospace',
                      color: '#7C3AED',
                      fontSize: '0.9rem',
                    }}
                  >
                    const passion = 'coding' + '❤️';
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 