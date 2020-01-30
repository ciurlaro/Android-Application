

    // listen for auth status changes
    auth.onAuthStateChanged(user => {
        if (user) {
            db.collection('tournaments').onSnapshot(snapshot => {
                setupGuides(snapshot.docs);
                setupUI(user);
            }, err => console.log(err.message));
        } else {
            setupUI();
            setupGuides([]);
        }
    });


    // update user informations
    const updateForm = document.querySelector('#update-form');
    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: updateForm['update-display-name'].value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
            password: updateForm['update-password'].value
        }).then(() => {
            user.updateEmail(updateForm['update-email'].value);
            // close the create modal & reset form & update UI
            const modal = document.querySelector('#modal-update');
            M.Modal.getInstance(modal).close();
            updateForm.reset();
            setupUI(user);
        }).catch(err => {
            console.log(err.message)
        });
    });


    // create new tournament
    const tournamentForm = document.querySelector('#tournament-form');
    var tournament_id;
    tournamentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        var user = firebase.auth().currentUser;
        db.collection('tournaments').add({
            user_id: user.uid,
            players_number: tournamentForm.players_number.value,
            tournament_description: tournamentForm.tournament_description.value,
            tournament_mode: tournamentForm.tournament_mode.value
        }).then((tournament) => {
            // close the create modal & reset form
            tournament_id = tournament.id; // <--  TEMPORANEO ?
            const modal = document.querySelector('#create-tournament');
            M.Modal.getInstance(modal).close();
            tournamentForm.reset();
        }).catch(err => {
            console.log(err.message);
        });
    });

    // create new match (takes previous tournament_id)
    const matchForm = document.querySelector('#match-form');
    var match_id;
    matchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        db.collection('matches').add({
            tournament_id: tournament_id,
            match_datetime: matchForm.match_datetime.value,
            following_match: null // MODIFICARE DOPO
        }).then((match) => {
            // close the create modal & reset form
            match_id = match.id; // <--  TEMPORANEO ?
            const modal = document.querySelector('#create-match');
            M.Modal.getInstance(modal).close();
            matchForm.reset();
        }).catch(err => {
            console.log(err.message);
        });
    });


    // create new registration (takes previous match_id and user_id)
    const registrationForm = document.querySelector('#registration-form');
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        var user = firebase.auth().currentUser;
        console.log(match_id);
        db.collection('registrations').add({
            match_id: match_id,
            user_id: user.uid,
            outcome: null // MODIFICARE DOPO
        }).then( () => {
            // close the create modal & reset form
            const modal = document.querySelector('#create-registration');
            M.Modal.getInstance(modal).close();
        }).catch(err => {
            console.log(err.message);
        });
    });


    // signup
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    auth.createUserWithEmailAndPassword(email, password).then( () => {
        // close the signup modal & reset form
         const modal = document.querySelector('#modal-signup');
         M.Modal.getInstance(modal).close();
        signupForm.reset();
        signupForm.querySelector('.error').innerHTML = '';
        }).catch(e => {
            signupForm.querySelector('.error').innerHTML = e.message;
        });
    });

    // logout
    const logout = document.querySelector('#logout');
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut()
    });


    // login with email and password
    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get user info
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;

        // log the user in
        auth.signInWithEmailAndPassword(email, password).then(() => {
            // close the signup modal & reset form
            const modal = document.querySelector('#modal-login');
            M.Modal.getInstance(modal).close();
            loginForm.reset();
        }).catch(e => {
            loginForm.querySelector('.error').innerHTML = e.message;
        });
    });


    // login with google
    const loginGoogle = document.querySelector('#google-signup');
    loginGoogle.addEventListener('submit', (e) => {
        e.preventDefault();

        // log the user in
        firebase.auth().signInWithPopup(googleProvider).then(() => {
            // close the signup modal & reset form
            const modal = document.querySelector('#modal-google');
            M.Modal.getInstance(modal).close();
            loginGoogle.reset();
        }).catch((error) => {
            var user = firebase.auth().currentUser;
            if (error.code === 'auth/account-exists-with-different-credential') {
                var pendingCred = error.credential;
                user.linkWithCredential(pendingCred);
            }
        });
    });


    // login with facebook
    const loginFacebook = document.querySelector('#facebook-signup');
    loginFacebook.addEventListener('submit', (e) => {
        e.preventDefault();

        // log the user in
        firebase.auth().signInWithPopup(facebookProvider).then(() => {
            // close the signup modal & reset form
            const modal = document.querySelector('#modal-facebook');
            M.Modal.getInstance(modal).close();
            loginFacebook.reset();
        }).catch( (error) => {
            var user = firebase.auth().currentUser;
            if (error.code === 'auth/account-exists-with-different-credential') {
                var pendingCred = error.credential;
                user.linkWithCredential(pendingCred);
            }
        });

    });



