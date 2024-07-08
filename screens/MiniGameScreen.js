import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Modal, Button } from 'react-native';


const allPairs = [
    { organ: "Heart", function: "Pumps blood", question: "What does the heart do?" },
    { organ: "Lungs", function: "Breathing", question: "What do lungs help with?" },
    { organ: "Brain", function: "Controls body functions", question: "What organ controls body functions?" },
    { organ: "Stomach", function: "Digestion", question: "Which organ is responsible for digestion?" },
    { organ: "Liver", function: "Detoxifies chemicals", question: "Which organ detoxifies chemicals?" },
    { organ: "Kidneys", function: "Filters blood", question: "Which organ filters blood?" },
    { organ: "Pancreas", function: "Regulates blood sugar", question: "What organ regulates blood sugar?" },
    { organ: "Intestines", function: "Absorbs nutrients", question: "What organ absorbs nutrients?" },
    { organ: "Skin", function: "Protects body", question: "What organ protects the body?" },
    { organ: "Eyes", function: "Vision", question: "What organ helps with vision?" },
    { organ: "Ears", function: "Hearing", question: "What organ is responsible for hearing?" },
    { organ: "Nose", function: "Smell", question: "What organ helps with smell?" },
    { organ: "Tongue", function: "Taste", question: "What organ is responsible for taste?" },
    { organ: "Bladder", function: "Stores urine", question: "What organ stores urine?" },
    { organ: "Spleen", function: "Filters blood", question: "What organ filters blood?" },
    { organ: "Gallbladder", function: "Stores bile", question: "What organ stores bile?" },
    { organ: "Appendix", function: "Unknown function", question: "What organ has an unknown function?" },
    { organ: "Thyroid", function: "Regulates metabolism", question: "What organ regulates metabolism?" },
    { organ: "Esophagus", function: "Transports food", question: "What organ transports food?" },
    { organ: "Adrenal glands", function: "Produces hormones", question: "What organ produces hormones?" },
    { organ: "Parathyroid glands", function: "Regulates calcium levels", question: "What organ regulates calcium levels?" },
    { organ: "Thymus", function: "Produces T-cells", question: "What organ produces T-cells?" },
    { organ: "Pituitary gland", function: "Master gland", question: "What organ is the master gland?" },
    { organ: "Hypothalamus", function: "Regulates body temperature", question: "What organ regulates body temperature?" },
    { organ: "Pineal gland", function: "Regulates sleep patterns", question: "What organ regulates sleep patterns?" },
    { organ: "Prostate", function: "Produces seminal fluid", question: "What organ produces seminal fluid?" },
    { organ: "Ovaries", function: "Produces eggs", question: "What organ produces eggs?" },
    { organ: "Uterus", function: "Houses fetus", question: "What organ houses the fetus?" },
    { organ: "Vagina", function: "Birth canal", question: "What organ is the birth canal?" },
    { organ: "Testes", function: "Produces sperm", question: "What organ produces sperm?" },
    { organ: "Penis", function: "Delivers sperm", question: "What organ delivers sperm?" },
    { organ: "Scrotum", function: "Holds testes", question: "What organ holds the testes?" },
    { organ: "Urethra", function: "Expels urine", question: "What organ expels urine?" },
    { organ: "Rectum", function: "Stores feces", question: "What organ stores feces?" },
    { organ: "Anus", function: "Expels feces", question: "What organ expels feces?" },
    { organ: "Pharynx", function: "Passage for air and food", question: "What organ is a passage for air and food?" },
    { organ: "Larynx", function: "Voice box", question: "What organ is the voice box?" },
    { organ: "Trachea", function: "Windpipe", question: "What organ is the windpipe?" },
    { organ: "Bronchi", function: "Air passages in lungs", question: "What organs are the air passages in the lungs?" },
    { organ: "Alveoli", function: "Gas exchange", question: "What organ is responsible for gas exchange?" },
    { organ: "Mouth", function: "Chewing", question: "What organ is used for chewing?" },
    { organ: "Salivary glands", function: "Produces saliva", question: "What organ produces saliva?" },
    { organ: "Mammary glands", function: "Produces milk", question: "What organ produces milk?" },
    { organ: "Sweat glands", function: "Produces sweat", question: "What organ produces sweat?" },
    { organ: "Sebaceous glands", function: "Produces oil", question: "What organ produces oil?" },
    { organ: "Lymph nodes", function: "Filters lymph", question: "What organ filters lymph?" },
    { organ: "Lymphatic vessels", function: "Transports lymph", question: "What organ transports lymph?" },
    { organ: "Bone marrow", function: "Produces blood cells", question: "What organ produces blood cells?" },
    { organ: "Veins", function: "Transports blood to heart", question: "What organ transports blood to the heart?" },
    { organ: "Arteries", function: "Transports blood away from heart", question: "What organ transports blood away from the heart?" },
    { organ: "Capillaries", function: "Exchange of gases, nutrients", question: "What organ is responsible for the exchange of gases and nutrients?" },
    { organ: "Cornea", function: "Focuses light", question: "What part of the eye focuses light?" },
    { organ: "Retina", function: "Processes light", question: "What part of the eye processes light?" },
    { organ: "Lens", function: "Adjusts focus", question: "What part of the eye adjusts focus?" },
    { organ: "Iris", function: "Controls pupil size", question: "What part of the eye controls pupil size?" },
    { organ: "Pupil", function: "Allows light in", question: "What part of the eye allows light in?" },
    { organ: "Eardrum", function: "Vibrates with sound", question: "What part of the ear vibrates with sound?" },
    { organ: "Cochlea", function: "Hearing", question: "What part of the ear is responsible for hearing?" },
    { organ: "Semicircular canals", function: "Balance", question: "What part of the ear is responsible for balance?" },
    { organ: "Taste buds", function: "Detects taste", question: "What part of the tongue detects taste?" },
    { organ: "Vocal cords", function: "Produces sound", question: "What part of the throat produces sound?" },
    { organ: "Diaphragm", function: "Breathing muscle", question: "What muscle helps with breathing?" },
    { organ: "Epiglottis", function: "Covers windpipe during swallowing", question: "What part of the throat covers the windpipe during swallowing?" },
    {organ: "Epithelial Tissue", function: "Covers body surfaces", question: "What tissue covers body surfaces?"},
    {organ: "Connective Tissue", function: "Supports and connects other tissues", question: "What tissue supports and connects other tissues?"},
    {organ: "Muscle Tissue", function: "Enables movement", question: "What tissue enables movement?"},
    {organ: "Nervous Tissue", function: "Transmits signals", question: "What tissue transmits signals?"},
    {organ: "Adipose Tissue", function: "Stores fat", question: "What tissue stores fat?"},
    { organ: "Cranium", function: "Protects the brain", question: "What bone protects the brain?" },
    { organ: "Mandible", function: "Jaw bone", question: "What bone is the jaw bone?" },
    { organ: "Maxilla", function: "Upper jaw bone", question: "What bone is the upper jaw bone?" },
    { organ: "Nasal bone", function: "Forms the bridge of the nose", question: "What bone forms the bridge of the nose?" },
    { organ: "Lacrimal bone", function: "Supports the eye", question: "What bone supports the eye?" },
    { organ: "Zygomatic bone", function: "Cheek bone", question: "What bone is the cheek bone?" },
    { organ: "Palatine bone", function: "Forms part of the oral cavity", question: "What bone forms part of the oral cavity?" },
    { organ: "Vomer", function: "Forms part of the nasal septum", question: "What bone forms part of the nasal septum?" },
    { organ: "Inferior nasal concha", function: "Supports the nasal cavity", question: "What bone supports the nasal cavity?" },
    { organ: "Malleus", function: "Transmits sound vibrations", question: "What bone transmits sound vibrations?" },
    { organ: "Incus", function: "Transmits sound vibrations", question: "What bone transmits sound vibrations?" },
    { organ: "Stapes", function: "Transmits sound vibrations", question: "What bone transmits sound vibrations?" },
    { organ: "Hyoid bone", function: "Supports the tongue", question: "What bone supports the tongue?" },
    { organ: "Cervical vertebrae", function: "Neck bones", question: "What bones are in the neck?" },
    { organ: "Thoracic vertebrae", function: "Upper back bones", question: "What bones are in the upper back?" },
    { organ: "Lumbar vertebrae", function: "Lower back bones", question: "What bones are in the lower back?" },
    { organ: "Sacrum", function: "Base of the spine", question: "What bone forms the base of the spine?" },
    { organ: "Coccyx", function: "Tailbone", question: "What bone is the tailbone?" },
    { organ: "Sternum", function: "Breastbone", question: "What bone is the breastbone?" },
    { organ: "Ribs", function: "Protect thoracic organs", question: "What bones protect thoracic organs?" },
    { organ: "Clavicle", function: "Collarbone", question: "What bone is the collarbone?" },
    { organ: "Scapula", function: "Shoulder blade", question: "What bone is the shoulder blade?" },
    { organ: "Humerus", function: "Upper arm bone", question: "What bone is in the upper arm?" },
    { organ: "Radius", function: "Forearm bone", question: "What bone is in the forearm?" },
    { organ: "Ulna", function: "Forearm bone", question: "What bone is in the forearm?" },
    { organ: "Carpals", function: "Wrist bones", question: "What bones are in the wrist?" },
    { organ: "Metacarpals", function: "Hand bones", question: "What bones are in the hand?" },
    { organ: "Phalanges (hand)", function: "Finger bones", question: "What bones are in the fingers?" },
    { organ: "Femur", function: "Thigh bone", question: "What bone is in the thigh?" },
    { organ: "Patella", function: "Knee cap", question: "What bone is the knee cap?" },
    { organ: "Tibia", function: "Shin bone", question: "What bone is in the shin?" },
    { organ: "Fibula", function: "Lower leg bone", question: "What bone is in the lower leg?" },
    { organ: "Tarsals", function: "Ankle bones", question: "What bones are in the ankle?" },
    { organ: "Metatarsals", function: "Foot bones", question: "What bones are in the foot?" },
    { organ: "Phalanges (foot)", function: "Toe bones", question: "What bones are in the toes?" },
    { organ: "Parietal bone", function: "Forms the sides and roof of the skull", question: "What bone forms the sides and roof of the skull?" },
    { organ: "Occipital bone", function: "Forms the back and base of the skull", question: "What bone forms the back and base of the skull?" },
    { organ: "Temporal bone", function: "Forms the sides and base of the skull", question: "What bone forms the sides and base of the skull?" },
    { organ: "Frontal bone", function: "Forms the forehead", question: "What bone forms the forehead?" },
    { organ: "Sphenoid bone", function: "Forms part of the base of the skull", question: "What bone forms part of the base of the skull?" },
    { organ: "Ethmoid bone", function: "Forms part of the nasal cavity", question: "What bone forms part of the nasal cavity?" }

];

const generateLevels = (pairs) => {
  const levels = [];
  const pairsPerLevel = 3; 
  const shuffledPairs = pairs.sort(() => 0.5 - Math.random()); 

  for (let i = 0; i < pairs.length; i += pairsPerLevel) {
    levels.push({
      level: levels.length + 1,
      pairs: shuffledPairs.slice(i, i + pairsPerLevel).map(pair => ({
        organ: pair.organ,
        function: pair.function,
        question: pair.question,
        selected: false, 
      })),
    });
  }

  return levels;
};

const levels = generateLevels(allPairs);

export default function MiniGameScreen() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [selectedPair, setSelectedPair] = useState(null);
  const [hints, setHints] = useState(3); 
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (matchedPairs.length === levels[currentLevel].pairs.length) {
      setShowModal(true);
    }
  }, [matchedPairs, currentLevel]);

  const handleSelectPair = (pair) => {
    setSelectedPair(pair);
  };

  const handleMatchPair = () => {
    if (selectedPair) {
      const existingPairIndex = matchedPairs.findIndex(
        (p) => p.organ === selectedPair.organ && p.function === selectedPair.function
      );

      if (existingPairIndex === -1) {
        setMatchedPairs([...matchedPairs, selectedPair]);
      }
    }
  };

  const handleHint = () => {
    if (hints > 0 && selectedPair) {
      setHints(hints - 1);
      alert(`Hint: ${selectedPair.function}`);
    }
  };

  const nextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setMatchedPairs([]);
      setSelectedPair(null);
      setShowModal(false);
    } else {
      alert("Congratulations! You've completed all levels.");
    }
  };

  const resetGame = () => {
    setCurrentLevel(0);
    setMatchedPairs([]);
    setSelectedPair(null);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.level}>Level {currentLevel + 1}</Text>
      <View style={styles.contentContainer}>
        <View style={styles.column}>
          <Text style={styles.label}>Organs:</Text>
          <FlatList
            data={levels[currentLevel].pairs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.pairContainer,
                  matchedPairs.some((p) => p.organ === item.organ && p.function === item.function)
                    ? styles.matched
                    : null,
                ]}
                onPress={() => handleSelectPair(item)}
                disabled={matchedPairs.some((p) => p.organ === item.organ && p.function === item.function)}
              >
                <Text style={styles.organ}>{item.organ}</Text>
              </TouchableOpacity>
            )}
            numColumns={2}
          />
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Functions:</Text>
          <FlatList
            data={levels[currentLevel].pairs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.pairContainer,
                  matchedPairs.some((p) => p.organ === item.organ && p.function === item.function)
                    ? styles.matched
                    : null,
                ]}
                onPress={() => handleSelectPair(item)}
                disabled={matchedPairs.some((p) => p.organ === item.organ && p.function === item.function)}
              >
                <Text style={styles.function}>{item.function}</Text>
              </TouchableOpacity>
            )}
            numColumns={1}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.matchButton}
        onPress={handleMatchPair}
        disabled={!selectedPair || matchedPairs.includes(selectedPair)}
      >
        <Text style={styles.buttonText}>Match</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.hintButton} onPress={handleHint} disabled={!selectedPair || hints === 0}>
        <Text style={styles.buttonText}>Hint ({hints})</Text>
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Matched Pairs:</Text>
            {matchedPairs.map((pair, index) => (
              <Text key={index} style={styles.modalText}>
                {pair.organ} - {pair.function}
              </Text>
            ))}
            <Button title="Next Level" onPress={nextLevel} />
            <Button title="Reset Game" onPress={resetGame} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  level: {
    fontSize: 24,
    marginBottom: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  column: {
    flex: 1,
    marginHorizontal: 10,
  },
  pairContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
  },
  matched: {
    backgroundColor: 'lightgreen',
  },
  organ: {
    fontWeight: 'bold',
  },
  function: {
    textAlign: 'center',
  },
  matchButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  hintButton: {
    backgroundColor: '#ffc107',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginVertical: 5,
  },
});
