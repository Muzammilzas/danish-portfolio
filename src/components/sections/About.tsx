import React from 'react';
import { Container, Grid, Typography, Box, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'Node.js', 'UI/UX Design', 'Responsive Design',
  'Material-UI', 'Git', 'REST APIs', 'Web Performance'
];

const About = () => {
  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Professional portrait"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 4,
                boxShadow: (theme) => `0 20px 40px ${theme.palette.primary.main}15`,
                mb: 4
              }}
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography variant="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              I'm a passionate web developer and designer with a keen eye for detail and a love for creating beautiful, functional websites. My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a full-fledged career.
            </Typography>
            <Typography variant="body1" paragraph>
              As a gay developer, I bring a unique perspective to my work, embracing diversity and creativity in everything I do. I believe that the best websites are those that not only look great but also tell a story and create meaningful connections with users.
            </Typography>
            
            <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 4, mt: 4 }}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Skills & Expertise
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Chip
                      label={skill}
                      color="primary"
                      sx={{
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          transition: 'transform 0.2s ease-in-out',
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 