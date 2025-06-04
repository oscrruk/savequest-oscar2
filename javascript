script.js body {
  font-family: 'Segoe UI', sans-serif;
  background: #1e1e2f;
  color: #fff;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 500px;
  margin: 50px auto;
  background: #2c2f48;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
}

h1 {
  text-align: center;
  color: #f9dc5c;
}

.stats {
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
}

input[type="number"] {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  padding: 10px 20px;
  background: #57cc99;
  color: #000;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.progress-bar {
  background: #444;
  border-radius: 10px;
  overflow: hidden;
  height: 20px;
  margin: 10px 0;
}

.fill {
  height: 100%;
  background: #80ed99;
  width: 0%;
  transition: width 0.4s ease-in-out;
}
