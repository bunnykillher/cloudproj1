var ViewModels = {
    signupVM : new SignUpViewModel(true),
    loginVM : new LoginViewModel(false),
    appVM : new AppViewModel(false)
}


ko.applyBindings(ViewModels);