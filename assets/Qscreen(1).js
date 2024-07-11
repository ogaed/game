import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const questionsData = {
    levels: [
        {
            level: 1,
            category: "Bones",
            questions: [
                { question: "How many bones are in the adult human body?", answer: "206" },
                { question: "What is the longest bone in the human body?", answer: "Femur" },
                { question: "Where is the smallest bone in the human body located?", answer: "Ear" },
                { question: "What part of the skeleton protects the brain?", answer: "Skull" },
                { question: "What is the main component of bones?", answer: "Calcium" }
            ]
        },
        {
            level: 2,
            category: "Muscles",
            questions: [
                { question: "What is the strongest muscle in the human body based on its weight?", answer: "Masseter" },
                { question: "What muscle is primarily responsible for breathing?", answer: "Diaphragm" },
                { question: "What is the large muscle in the front of the thigh called?", answer: "Quadriceps" },
                { question: "Which muscle is known as the 'calf' muscle?", answer: "Gastrocnemius" },
                { question: "What muscle is located in the upper arm and is responsible for flexing the elbow?", answer: "Biceps" }
            ]
        },
        {
            level: 3,
            category: "Neurons",
            questions: [
                { question: "What is the basic functional unit of the nervous system?", answer: "Neuron" },
                { question: "What part of the neuron receives signals?", answer: "Dendrites" },
                { question: "What is the long, threadlike part of a neuron that transmits signals called?", answer: "Axon" },
                { question: "What is the gap between two neurons called?", answer: "Synapse" },
                { question: "What substance insulates axons to speed up neural transmission?", answer: "Myelin" }
            ]
        }
    ]
};

const QzScreen = () => {
    const [level, setLevel] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [input, setInput] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);

    const handleAnswer = () => {
        setShowAnswer(true);
    };

    const handleNext = () => {
        if (questionIndex < questionsData.levels[level].questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
        } else if (level < questionsData.levels.length - 1) {
            setLevel(level + 1);
            setQuestionIndex(0);
        } else {
            // Reached the end of questions
        }
        setShowAnswer(false);
        setInput('');
    };

    const handlePrev = () => {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        } else if (level > 0) {
            setLevel(level - 1);
            setQuestionIndex(questionsData.levels[level - 1].questions.length - 1);
        }
        setShowAnswer(false);
        setInput('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.level}>Level {questionsData.levels[level].level}: {questionsData.levels[level].category}</Text>
            <View style={styles.progressContainer}>
                {questionsData.levels[level].questions.map((_, index) => (
                    <View key={index} style={[
                        styles.progressBar,
                        { backgroundColor: index <= questionIndex ? '#007BFF' : '#555555' }
                    ]} />
                ))}
            </View>
            <Text style={styles.question}>
                {questionsData.levels[level].questions[questionIndex].question}
            </Text>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Type your answer"
            />
            {showAnswer && (
                <Text style={styles.answerText}>
                    Correct answer: {questionsData.levels[level].questions[questionIndex].answer}
                </Text>
            )}
            <View style={styles.hintContainer}>
                <TouchableOpacity style={styles.hintButton}>
                    <Text style={styles.hintText}>HINT</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.adContainer}>
                <Image source={require('./assets/add.png')} style={styles.adImage} />
                <Text style={styles.adText}>Watch Add to refill coins</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.prevButton} onPress={handlePrev}>
                    <Text style={styles.buttonText}>PREVIOUS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answerButton} onPress={handleAnswer}>
                    <Text style={styles.buttonText}>ANSWER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10142D',
        padding: 20,
        justifyContent: 'center',
    },
    level: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    progressBar: {
        height: 5,
        width: 20,
        marginHorizontal: 2,
    },
    question: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20,
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    hintContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    hintButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    hintText: {
        color: '#ffffff',
        marginLeft: 5,
    },
    adContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    adImage: {
        width: 93,
        height: 59,
    },
    adText: {
        color: '#ffffff',
        textAlign: 'center',
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    prevButton: {
        backgroundColor: '#555555',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    answerButton: {
        backgroundColor: '#007BFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    nextButton: {
        backgroundColor: '#555555',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
    }
});

export default QzScreen;
