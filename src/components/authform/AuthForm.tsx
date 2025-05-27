import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User 
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';

interface AuthFormInputs {
  email: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFormInputs>();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const onSubmit = async (data: AuthFormInputs) => {
    setErrorMsg(null);
    setLoading(true);
    try {
      if (mode === 'register') {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
      } else {
        await signInWithEmailAndPassword(auth, data.email, data.password);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Ошибка аутентификации');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  if (user) {
    return (
      <div style={{ maxWidth: 400, margin: '1rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 8, fontFamily: 'Arial, sans-serif' }}>
        <p>Вход выполнен как: <strong>{user.email}</strong></p>
        <button onClick={logout} style={{
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}>
          Выйти
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{
      maxWidth: 400,
      margin: '1rem auto',
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: 8,
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <h2>{mode === 'login' ? 'Вход' : 'Регистрация'}</h2>

      <input
        type="email"
        placeholder="Email"
        {...register('email', { 
          required: 'Email обязателен', 
          pattern: { value: /^\S+@\S+$/i, message: 'Неверный формат email' } 
        })}
        style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: 4, border: '1px solid #ccc' }}
        disabled={loading}
      />
      {errors.email && <p style={{ color: 'red', margin: 0 }}>{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Пароль"
        {...register('password', {
          required: 'Пароль обязателен',
          minLength: { value: 6, message: 'Минимум 6 символов' }
        })}
        style={{ padding: '0.5rem', fontSize: '1rem', borderRadius: 4, border: '1px solid #ccc' }}
        disabled={loading}
      />
      {errors.password && <p style={{ color: 'red', margin: 0 }}>{errors.password.message}</p>}

      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

      <button type="submit" disabled={loading} style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '0.75rem',
        borderRadius: '4px',
        cursor: loading ? 'not-allowed' : 'pointer',
        fontSize: '1rem',
      }}>
        {loading ? 'Подождите...' : (mode === 'login' ? 'Войти' : 'Зарегистрироваться')}
      </button>

      <div style={{ fontSize: '0.9rem', textAlign: 'center' }}>
        {mode === 'login' 
          ? 'Нет аккаунта? ' 
          : 'Уже есть аккаунт? '}
        <button
          type="button"
          onClick={() => {
            setErrorMsg(null);
            setMode(mode === 'login' ? 'register' : 'login');
          }}
          style={{
            background: 'none',
            border: 'none',
            color: '#007bff',
            cursor: 'pointer',
            textDecoration: 'underline',
            padding: 0,
            fontSize: '1rem',
          }}
        >
          {mode === 'login' ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
