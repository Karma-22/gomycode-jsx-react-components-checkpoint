import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';

// Importation des 4 composants requis (Consigne GoMyCode)
import Name from './components/Name.jsx';
import Price from './components/Price.jsx';
import Description from './components/Description.jsx';
import Image from './components/Image.jsx';

// Variable de prénom définie au-dessus du composant App (Consigne GoMyCode)
const initialFirstName = "Darius";

// Image de profil / avatar affichée lorsque le prénom est fourni (Consigne GoMyCode)
const userAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80";

function App() {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="app-wrapper py-5">
      <Container>
        {/* Header / Intro */}
        <div className="text-center mb-5">
          <Badge bg="primary" pill className="px-3 py-2 text-uppercase mb-2 letter-spacing">
            GoMyCode • Checkpoint JSX & React Components
          </Badge>
          <h1 className="main-title fw-extrabold display-5">
            Composants Modulaires & Rendu Conditionnel
          </h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: '640px' }}>
            Ce point de contrôle valide la séparation des composants (<code>Name</code>, <code>Price</code>, <code>Description</code>, <code>Image</code>) encapsulés dans une carte React-Bootstrap, ainsi que la logique d'accueil personnalisée.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            {/* 1. CARTE DU PRODUIT (react-bootstrap Card) */}
            <Card className="product-card shadow-lg border-0 mb-4">
              {/* Composant Image */}
              <Image />

              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="text-uppercase fw-bold text-muted small letter-spacing">Technologie Audio</span>
                  <Badge bg="warning" text="dark" className="fw-semibold">Premium Pick</Badge>
                </div>

                {/* Composant Name */}
                <Name />

                {/* Composant Price */}
                <Price />

                {/* Composant Description */}
                <Description />

                {/* Bouton d'action Acheter / Ajouter au panier */}
                <div className="d-grid gap-2 pt-2">
                  <Button
                    variant={addedToCart ? "success" : "primary"}
                    size="lg"
                    className="fw-bold py-3 shadow-sm rounded-pill transition-all"
                    onClick={handleAddToCart}
                  >
                    {addedToCart ? "✔ Ajouté au panier !" : "Ajouter au panier 🛍️"}
                  </Button>
                </div>
              </Card.Body>
            </Card>

            {/* 2. SECTION MESSAGE PERSONNALISÉ (Consigne GoMyCode) */}
            <div className="greeting-card card border-0 shadow-sm p-4 text-center">
              <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                {/* Rendu conditionnel de l'avatar si le prénom est fourni */}
                {firstName && firstName.trim() !== '' ? (
                  <div className="avatar-wrapper">
                    <img
                      src={userAvatar}
                      alt={`Avatar de ${firstName}`}
                      className="user-avatar rounded-circle shadow"
                    />
                    <span className="online-indicator"></span>
                  </div>
                ) : (
                  <div className="avatar-placeholder rounded-circle shadow-sm">
                    👤
                  </div>
                )}

                <div className="text-start">
                  {/* Rendu conditionnel du message "Hello, [firstName] !" ou "Hello, there !" */}
                  <h4 className="fw-bold mb-1 greeting-text">
                    {firstName && firstName.trim() !== ''
                      ? `Hello, ${firstName} ! 👋`
                      : 'Hello, there ! 👋'}
                  </h4>
                  <small className="text-muted">
                    {firstName && firstName.trim() !== ''
                      ? 'Ravi de vous revoir sur votre boutique tech !'
                      : 'Connectez-vous ou indiquez votre prénom ci-dessous.'}
                  </small>
                </div>
              </div>

              {/* Panneau de test interactif pour basculer facilement entre les deux états */}
              <div className="test-control mt-3 pt-3 border-top">
                <Form.Group className="d-flex gap-2 align-items-center justify-content-center">
                  <Form.Label className="small text-muted mb-0 text-nowrap">Tester un autre prénom :</Form.Label>
                  <Form.Control
                    type="text"
                    size="sm"
                    value={firstName}
                    placeholder="Laissez vide pour voir 'Hello, there !'"
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ maxWidth: '200px' }}
                  />
                  {firstName && (
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => setFirstName('')}
                      title="Effacer pour tester 'Hello, there !'"
                    >
                      Effacer
                    </Button>
                  )}
                </Form.Group>
              </div>
            </div>
          </Col>
        </Row>

        {/* Footer */}
        <footer className="text-center text-muted mt-5 pt-4 border-top">
          <small>
            GoMyCode Full Stack Bootcamp • Checkpoint JSX & React Components • Développé par <strong>Karma-22 (Darius Ange)</strong>
          </small>
        </footer>
      </Container>
    </div>
  );
}

export default App;
